// Display links from vidcdn, mp4upload whichever comes first
function filterEpisodes(episodeList) {
    let url = "";
    let index = 0;

    while (url === "") {
        const sourceName = episodeList[index].name.toLowerCase();
        if (sourceName === "vidcdn" || sourceName === "mp4upload") {
            url = episodeList[index].url;
        }

        index = index + 1;
    }

    return url;
}

// Remove dubbed anime instances if specified
function removeDub(animelist) {
    return animelist.filter((anime) => {
        return anime.name.toUpperCase().indexOf("DUB") === -1
    })
}

module.exports.filterEpisodes = filterEpisodes;
module.exports.removeDub = removeDub;