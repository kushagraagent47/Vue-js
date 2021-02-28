const App = {
    data() {
        return {
            heading: "A Picture",
            subHead: "Check this out",
            myImg: "image.jpg",
            urlLink: "web.learncodeonline.in"
        }
    }
}

Vue.createApp(App).mount('.vapp')