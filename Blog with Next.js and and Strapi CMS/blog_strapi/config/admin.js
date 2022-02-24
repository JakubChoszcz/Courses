module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '15987771e2d8595fe3c5104b87afa0c4'),
  },
});
