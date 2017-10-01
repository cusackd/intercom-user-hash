# Intercom User Hash

Code for generating the user_hash value for Intercom's Identity verfication (Note: Identity verification was prevoiusly called Secure Mode)

```javascript
const iuh = require("intercom-user-hash");

var intercomUserHash = iuh("IntercomSecret", "name@example.com");
```

Credits
[thewheat/Intercom user_hash.md](https://gist.github.com/thewheat/7342c76ade46e7322c3e)
