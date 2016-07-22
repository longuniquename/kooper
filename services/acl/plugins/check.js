module.exports = function () {
    this.add({ role: 'acl', cmd: 'check' }, (msg, done) => done(null, { allow: true }));
};
