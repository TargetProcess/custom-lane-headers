tau.mashups
    .addDependency('tau/api/board/v1/customize')
    .addDependency('tau/const/entityType.names')
    .addDependency('tp3/mashups/css')
    .addDependency('tau/utils/utils.htmlConverter')
    .addMashup(function(customizeApi, entityTypes, CSS, htmlConverter) {

        // Creating CSS styles for custom units to apply styles to Descriptions
        var css = new CSS();
        css.addCSSRule('.rich-content', 'overflow: hidden;');
        css.addCSSRule('.rich-content a', 'word-wrap: break-word;');
        css.addCSSRule('.rich-content ul, .rich-content ol', 'padding: 0; margin: 8px 0 8px 20px;');
        css.addCSSRule('.rich-content ul', 'list-style-type: disc;');
        css.addCSSRule('.rich-content li', 'margin-bottom: 2px;');
        css.addCSSRule(
            '.rich-content p, .rich-content h1, .rich-content h2, .rich-content h3, .rich-content h4, .rich-content h5, .rich-content h6',
            'margin: 8px 0;'
        );

        // Register custom unit to display the content of Iteration/Sprint Description
        // See https://dev.targetprocess.com/docs/custom-units for more information on writing custom units
        customizeApi.registerCustomUnit({
            id: 'raw_description',
            types: [entityTypes.ITERATION],
            model: 'description:Description',
            hideIf: function(data) {
                return !data.description;
            },
            template: {
                customFunctions: {
                    convert: function(content) {
                        return htmlConverter.fromSourceToHtml(content);
                    }
                },
                markup: ['<div class="rich-content"><%= fn.convert(this.data.description) %></div>']
            }
        });

        // Add custom description units to the board with ID 1111111111111111111 to Sprint (aka Iteration) lane
        // Description will be displayed if this board has Sprints/Iterations selected as Horizontal Lanes
        customizeApi.registerViewAxisHeaderLayout('1111111111111111111',  [entityTypes.ITERATION], {
            sections: [
                {
                    units: [{id: 'raw_description'}]
                }
            ]
        });
    });
