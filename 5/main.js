const app = new Vue({
  el: "#app",
  data: {
    friends: ["Jack", "John"],
  },
  mounted() {
    fetch("http://api.zipaddress.net?zipcode=8100000")
      .then(response => response.json())
      .then((data) => {
        // console.log(data.data);
        // this.friends = data.data;
      })
  },
  template: `
    <div>
      <li v-for="friend in friends">{{friend}}</li>
    </div>
  `
});
