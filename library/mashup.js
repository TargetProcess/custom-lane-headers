tau.mashups
    .addDependency('tau/api/board/v1/customize')
    .addDependency('tau/const/entityType.names')
    .addMashup(function(customizeApi, entityTypes){

        customizeApi.registerDefaultAxisHeaderLayout([entityTypes.ITERATION, entityTypes.STORY], {
            sections: [
                {
                    units: [
                        {id: 'project_long', alignment: 'base'}
                    ]
                }
            ]
        });

        customizeApi.registerDefaultAxisHeaderLayout([entityTypes.FEATURE], {
            sections: [
                {
                    units: [
                        {id: 'release_long', alignment: 'base'}
                    ]
                }
            ]
        });
    });