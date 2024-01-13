const { authorize } = require('./controllers/authController');
const { getUnreadMessages, sendReply } = require('./controllers/messageController')

const autoMailApp = async () => {
    //Start
    console.log("Running scheduled autoMailer...")

    //Wait for authorization from authController
    const auth = await authorize();

    try {
        //get unread messages
        const msgs = await getUnreadMessages(auth);

        //send reply to unread messages
        await sendReply(auth, msgs);

        //End
        console.log("AutoMail Run Over")
        console.log("--------------------")

    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    autoMailApp
}