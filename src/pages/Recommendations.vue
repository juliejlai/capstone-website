<template lang="html">

<body>
    <html>
        <head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
        </head>

        <body>
            <div class="container-fluid cover" style="width: 100%; backdrop-filter: blur(3px) contrast(0.9)">
                <div class="pt-5 pb-5 mb-0 text-white">
                    <div class="container center">
                    <img
                        style="
                            width: auto;
                            height: 570px;
                            margin-left: auto;
                            margin-right: auto;
                            backdrop-filter: blur(3px) contrast(0.9)
                        "
                    />
                    </div>
                </div>
            </div>

        </body>
    </html>
</body>


</template>


<script>
import WaveSync from '@/wavesync'

export default {
  data () {
    return {
      loading: false
    }
  },

  mounted () {
    this.wavesync = new WaveSync({ fixed: true })
  }
}
</script>


<style lang="scss" scoped>

html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}


.center {
  text-align: center;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}



</style>