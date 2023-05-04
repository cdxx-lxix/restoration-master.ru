<template>
    {{ getLastVideo() }}
    <div class="row wrap justify-center items-center content-center"
        :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="youtube">
        <q-card class="bg-secondary full-width" dark flat>
            <q-video loading="lazy" :ratio="16 / 9" :src="lastVideoUrl" frameborder="0" allowfullscreen class="cardFit"/>
        </q-card>
    </div>
</template>

<script>
let channelUrl;
let lastVideoUrl;
export default {
    methods: {
        getLastVideo() {
            // cid - channel ID
            // channelURL - generated feed url 
            // reqURL - url to make an rss request to avoid usage of youtubes paid api
            // as a result I got json with all of the nessesary data 
            // catch block in case of a failure returns specified channel url and video
            const cid = "UC0wloL2MbrkafRbZ2CC8qQA";
            let channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
            let reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;
            try {
                fetch(reqURL).then(response => response.json()).then(result => {
                    this.channelUrl = result.feed.link;
                    let guid = result.items[0].guid;
                    guid = guid.toString().slice(9)
                    this.lastVideoUrl = "https://www.youtube.com/embed/" + guid
                })
            } catch (error) {
                console.log(error)
                this.channelUrl = "https://www.youtube.com/channel/UC0wloL2MbrkafRbZ2CC8qQA";
                this.lastVideoUrl = "";
            }
        },
    },
    data() {
        return {
            channelUrl,
            lastVideoUrl
        }
    }
}
</script>