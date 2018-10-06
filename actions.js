import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
	type: ADD_COMMENT,
	text: 'pierwszy komentarz'
}

{
    type: EDIT_COMMENT,
    id: 20,
    text: 'wyedytowany tekst komentarza'
}

{
    type: REMOVE_COMMENT,
    id: 20
}

{
	type: THUMB_UP_COMMENT,
	id: 20,
	number: 0
}

{
	type: THUMB_DOWN_COMMENT,
	id: 20,
	number: 0
}


function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};

function editComment(newText, id) {
    return {
        type: EDIT_COMMENT,
        text: newText,
        id: id
    }
};

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: id
	}
};

function thumbUpComment (id, newNumber) {
	return {
		type: THUMB_UP_COMMENT,
		id: id,
		number: newNumber + 1
	}
};

function thumbDownComment (id, newNumber) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id,
		number: newNumber - 1
	}
};