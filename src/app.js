const { authorize } = require('./controllers/authController');
const { getUnreadMessages, sendReply } = require('./controllers/messageController')

const autoMailApp = async () => {
    console.log("Running scheduled autoMailer...")
    const auth = await authorize();

    try {
        const msgs = await getUnreadMessages(auth);
        await sendReply(auth, msgs);
        console.log("AutoMail Run Over")
        console.log("------------------")

    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    autoMailApp
}