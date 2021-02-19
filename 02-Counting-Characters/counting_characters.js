//insert your pseudocode below
/*
create variable with input User text
prompt this variable with txt msg, enter the text
print the user text and count character
*/

//insert your code below
var user_text, count_character;


user_text = window.prompt('enter the  text');
count_character = user_text.length;
window.alert([user_text,'   no of character is ',count_character].join(''));