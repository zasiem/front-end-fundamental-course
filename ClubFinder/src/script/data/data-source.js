class DataSource {

    static searchClub(keyword) {

        return new Promise((resolve, reject) => {
            fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
                .then(response => {
                    return response.json();
                })
                .then(response => {
                    let data = [];
                    if(response.teams.length){
                        response.teams.forEach(team => {
                            data.push({
                                name: team.strTeam,
                                stadium: team.strStadium,
                                fanArt: team.strTeamBadge,
                                description: team.strDescriptionEN
                            })
                        });
                        resolve(data);
                    }else{
                        reject(`${keyword} is not found`);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        });
    };

}

export default DataSource;