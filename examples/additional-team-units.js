tau.mashups
    .addDependency('tau/api/board/v1/customize')
    .addDependency('tau/const/entityType.names')
    .addMashup(function(customizeApi, entityTypes){

        // This will add the list of project the team is assigned to as well as the number of open Stories and Bugs
        // to all boards and timelines where Teams are Horizontal Lanes
        customizeApi.registerDefaultAxisHeaderLayout([entityTypes.TEAM], {
            sections: [
                {
                    units: [
                        {id: 'project_abbrs_team', alignment: 'base'}
                    ]
                },
                {
                    units: [
                        {id: 'bugs_badge', alignment: 'base'},
                        {id: 'us_count', alignment: 'base'}
                    ]
                }
            ]
        });
    });