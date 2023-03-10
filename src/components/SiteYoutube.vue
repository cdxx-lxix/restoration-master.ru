<template>
    {{ getLastVideo() }}
    <div class="q-pa-md row wrap justify-center items-center content-center" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'">
        <div class="q-video" style="width: 100%;">
            <iframe style="aspect-ratio: 16/9;" :src="lastVideoUrl" frameborder="0" allowfullscreen />
        </div>
    </div>
</template>

<script>
let channelUrl;
let lastVideoUrl;
export default {
    methods: {
        getLastVideo() {
            const cid = "UCQP4POsDskpkSK9OANY1zAA";
            let channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
            let reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;
            try {
                fetch(reqURL).then(response => response.json()).then(result => {
                this.channelUrl = result.feed.link;
                let guid = result.items[0].guid;
                guid = guid.toString().slice(9)
                this.lastVideoUrl = "https://www.youtube.com/embed/" + guid
            })
            } catch(error) {
                console.log(error)
                this.channelUrl = "";
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