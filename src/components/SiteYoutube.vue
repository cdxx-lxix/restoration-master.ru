<template>
    <div class="row wrap justify-center items-center content-center"
        :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="youtube" ref="videoContainer">
        <q-video v-if="videoVisible" loading="lazy" :ratio="$windowWidth >= 580 ? 16 / 9 : 9 / 16" :src="lastVideoUrl"
            frameborder="0" allowfullscreen class="cardFit full-width" />
    </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        const videoContainer = ref(null);
        const lastVideo = ref('');
        const lastVideoUrl = ref('');
        const videoVisible = ref(false);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    videoVisible.value = true;
                    observer.unobserve(entry.target);
                }
            });
        });

        onMounted(() => {
            getLastVideo();
            observer.observe(videoContainer.value);
        });

        onUnmounted(() => {
            observer.disconnect();
        });

        const getLastVideo = async () => {
            const cid = "UC0wloL2MbrkafRbZ2CC8qQA"
            const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
            const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`

            try {
                const response = await fetch(reqURL)
                const result = await response.json()
                lastVideo.value = result.feed.link
                const guid = result.items[0].guid.slice(9)
                lastVideoUrl.value = "https://www.youtube.com/embed/" + guid
            } catch (error) {
                console.log(error)
                lastVideoUrl.value = "https://www.youtube.com/embed/Rh0dvucheYQ" // First video if the script fails to find new one
            }
        };

        return {
            videoContainer,
            lastVideoUrl,
            videoVisible,
        };
    },
};
</script>