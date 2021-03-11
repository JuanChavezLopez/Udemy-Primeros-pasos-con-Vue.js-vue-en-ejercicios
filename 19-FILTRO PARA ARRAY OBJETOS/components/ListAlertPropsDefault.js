Vue.component ('list-alert-default',{
    props: {
      // message: String
      message : {
        type: String,
        default: "Props por defecto"
      }
    },
    template: `
    <div class="alert alert-success" role="alert">
    {{ message }}
  </div>
    `
})