const app = new Vue({
  el: "#app",
  data: {
    editFriend: null,
    friends: [],
  },
  methods: {
    deleteFriend(id, i) {
      fetch("http://api.zipaddress.net?zipcode=8100000")
        .then(() => {
          this.friends.splice(i, 1);
        })
    },
    updateFriend(friend) {
      fetch("http://api.zipaddress.net?zipcode=8100000")
        .then(() => {
          this.editFriend = null;
        })
    }
  },
  mounted() {
    fetch("http://api.zipaddress.net?zipcode=8100000")
      .then(response => response.json())
      .then((data) => {
        this.friends = [
          { id: 1, name: 'AAA' },
          { id: 2, name: 'BBB' },
          { id: 3, name: 'CCC' },
        ]
      })
  },
  template: `
    <div>
      <li v-for="friend, i in friends">
        <div v-if="editFriend === friend.id">
          <input v-on:keyup.13="updateFriend(friend)" v-model="friend.name" />
          <button v-on:click="updateFriend(friend)">save</button>
        </div>
        <div v-else>
          <button v-on:click="editFriend = friend.id">edit</button>
          <button v-on:click="deleteFriend(friend.id, i)">x</button>
          {{friend.name}}
        </div>
      </li>
    </div>
  `
});
