<template>
    <div class="full-width row wrap justify-center items-center content-center" :class="$windowWidth >= 1080 ? 'CNT__eighty' : 'CNT__all'" id="contacts">
        <q-btn padding="lg" round dense flat :ripple="{ center: true }" ><q-avatar :size="iconResizer()"><img :src="viber" ></q-avatar></q-btn>
        <q-btn padding="lg" round dense flat :ripple="{ center: true }" ><q-avatar :size="iconResizer()"><img :src="whatsapp" ></q-avatar></q-btn>
        <q-btn padding="lg" round dense flat :ripple="{ center: true }" ><q-avatar :size="iconResizer()"><img :src="telegram" ></q-avatar></q-btn>
        <q-btn padding="lg" round dense flat :ripple="{ center: true }" ><q-avatar :size="iconResizer()"><img :src="phone" ></q-avatar></q-btn>
        <q-btn padding="lg" round dense flat :ripple="{ center: true }" ><q-avatar :size="iconResizer()"><img :src="mail" ></q-avatar></q-btn>
    </div>
</template>

<script>
import mail from '../assets/mail.png';
import phone from '../assets/phone.png';
import telegram from '../assets/telegram.png';
import viber from '../assets/viber.png';
import whatsapp from '../assets/whatsapp.png';

    export default {
        data() {
            return {
                mail,
                phone,
                telegram,
                viber,
                whatsapp
            }
        },
        methods: {
            iconResizer() {
                let size = 150;
                return size+'px'
            }
        }
    }
</script>