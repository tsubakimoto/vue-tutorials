const FriendStore = {
  data: {
    friends: ["bobbdy", "billy"]
  },
  methods: {
    addFriend(name) {
      FriendStore.data.friends.push(name);
    }
  }
};

export default FriendStore;