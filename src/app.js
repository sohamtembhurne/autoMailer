const { authorize } = require('../controllers/authController');
const { getUnreadMessages, sendReply } = require('../controllers/messageController')

const autoMail = async () => {
    const auth = await authorize();

    try {
        const msgs = await getUnreadMessages(auth);
        await sendReply(auth, msgs);

    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    autoMail
}