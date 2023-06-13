import { createSlice } from "@reduxjs/toolkit";

const data = {
    postList: [
        {postId: 1, title: 'About the weather:'},
        {postId: 2, title: 'About sport:'},
        {postId: 3, title: 'About cars:'},
    ],
    commentList:[
        {commentId: 1, postId: 1, message: 'It s a beautiful day today with clear skies and a gentle breeze. The temperature outside is around 25 degrees Celsius, making it a perfect day to spend some time outdoors.'},
        {commentId: 2, postId: 1, message: 'The weather in London can be quite unpredictable, but it is generally mild and damp throughout the year. Overall, it is important to be prepared for a range of weather conditions when visiting or living in London.'},
        {commentId: 3, postId: 2, message: 'Some of the most popular sports in Germany include football (soccer), basketball, handball, ice hockey, and tennis. The country has also hosted several major international sporting events, including the 1972 Summer Olympics in Munich and the 2006 FIFA World Cup.'},
        {commentId: 4, postId: 2, message: 'One key difference between sports in England and Germany is the level of success in international competitions. While both countries have had success in various sports, especially football, England has won the FIFA World Cup once (in 1966) while Germany has won it four times (in 1954, 1974, 1990, and 2014).'},
        {commentId: 5, postId: 2, message: 'French football clubs have won numerous international titles, and the French national team has won both the FIFA World Cup and the UEFA European Championship. Rugby is also a popular sport in France, with the national team having won the Six Nations Championship multiple times. French athletes have also excelled in tennis, with players such as Yannick Noah and Amélie Mauresmo having won Grand Slam titles.'},
        {commentId: 6, postId: 3, message: "Germany is famous for its automotive industry, with some of the world's most popular car brands such as BMW, Mercedes-Benz, Audi, Volkswagen, and Porsche all originating from the country. German cars are known for their quality, engineering, and reliability, and are often associated with luxury and high performance. The country is also home to numerous car museums and racetracks, such as the Nürburgring, which attracts car enthusiasts from all over the world."},
        {commentId: 6, postId: 3, message:"England has a long history of car manufacturing, with some of the world's most iconic car brands such as Aston Martin, Bentley, Jaguar, Land Rover, and Rolls-Royce all originating from the country. English cars are known for their luxury, style, and craftsmanship, and are often associated with the British royal family and other high-profile figures. The country is also home to numerous car museums and events, such as the Goodwood Festival of Speed, which celebrates the history and culture of British motoring."}
    ]
}

const defaultState = JSON.parse(localStorage.getItem('posts')) ?? data
// console.log('defaultState----', defaultState);

const postlistSlice = createSlice({
    name: 'PostList',
        initialState: defaultState,
    reducers:{
        addComment(state, actions){
            state.commentList.push({
                commentId: Date.now(),
                postId: actions.payload.postId,
                message: actions.payload.message
            })
        },
        removeComment(state, actions){
            state.commentList = state.commentList.filter(el => el.commentId !== actions.payload)
        },
        addNewPost(state,actions){
            state.postList.unshift({
                postId: Date.now(),
                title: actions.payload
            })
        },
        removePost(state, actions){
            state.commentList = state.commentList.filter(el => el.postId !== actions.payload)
            state.postList = state.postList.filter(el => el.postId !== actions.payload)
        }
    }

})

export default postlistSlice.reducer
export const {addComment, removeComment, addNewPost, removePost } = postlistSlice.actions