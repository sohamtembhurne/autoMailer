const { google } = require('googleapis');


const getOrCreateLabel = async (auth) => {
    const gmail = google.gmail({ version: "v1", auth });

    //Check labels
    let res = await gmail.users.labels.list({ userId: "me" });
    let labels = res.data.labels;

    // Check if the label already exists
    const labelExists = labels.some((label) => label.name === "autoReplies");

    if (!labelExists) {

        //create label
        const createdLabel = await gmail.users.labels.create({
            userId: "me",
            requestBody: {
                name: "autoReplies",
                labelListVisibility: "labelShow",
                messageListVisibility: "show",
            },
        });

        console.log(createdLabel);
        console.log("Label Created");

        return createdLabel.data.id;
    } else {
        console.log("Label already exists");
    }

    //Find ID of label since it already exists
    const labelId = labels.find((label) => label.name === "autoReplies").id;
    return labelId;
}

const addLabel = async (auth, labelId, msgId) => {
    const gmail = google.gmail({ version: "v1", auth });

    //Add label to the mail
    gmail.users.messages.modify({
        userId: "me",
        id: msgId,
        requestBody: {
            addLabelIds: [labelId],
            removeLabelIds: ["UNREAD"]
        },
    });

    console.log("Label added")
}

module.exports = { getOrCreateLabel, addLabel };
