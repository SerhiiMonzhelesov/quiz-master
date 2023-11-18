import { createSlice } from "@reduxjs/toolkit";
import {
  getAllReviewsThunk,
  createReviewThunk,
  createReviewQuizThunk,
  createQuizReviewThunk,
} from "./feedbackThunks";

// const reviews =[
//   {
//     _id: 1,
//     userAvatar:
//       "https://c.files.bbci.co.uk/9270/production/_126588473_boris_1221_getty.jpg",
//     comment:
//       "Excellent platform, easy to use and lots of fun. I've recommended it to all my friends!",
//     userName: "Alice",
//   },
//   {
//     _id: 2,
//     userAvatar:
//       "https://c.files.bbci.co.uk/9270/production/_126588473_boris_1221_getty.jpg",
//     comment:
//       "This app is fantastic! I've learned so much through the quizzes. Highly recommended!",
//     userName: "David",
//   },
//   {
//     _id: 3,
//     userAvatar:
//       "https://c.files.bbci.co.uk/9270/production/_126588473_boris_1221_getty.jpg",
//     comment:
//       "I love the variety of quizzes available. It's a great way to challenge yourself and have fun.",
//     userName: "Sophie",
//   },
//   {
//     _id: 4,
//     userAvatar:
//       "https://c.files.bbci.co.uk/9270/production/_126588473_boris_1221_getty.jpg",
//     comment:
//       "Great app for learning! The quizzes cover a w_ide range of topics. Highly recommended.",
//     userName: "Michael",
//   },
//   {
//     _id: 5,
//     userAvatar:
//       "https://c.files.bbci.co.uk/9270/production/_126588473_boris_1221_getty.jpg",
//     comment:
//       "I enjoy creating quizzes as much as taking them! It's user-friendly and fun.",
//     userName: "Emily",
//   },
//   {
//     _id: 6,
//     userAvatar:
//       "https://c.files.bbci.co.uk/9270/production/_126588473_boris_1221_getty.jpg",
//     comment:
//       "The app is awesome! I've been using it every day. It's both entertaining and educational.",
//     userName: "Jack",
//   },
//   {
//     _id: 7,
//     userAvatar:
//       "https://c.files.bbci.co.uk/9270/production/_126588473_boris_1221_getty.jpg",
//     comment:
//       "I'm impressed with the app's interface. It's so intuitive and engaging!",
//     userName: "Olivia",
//   },
//   {
//     _id: 8,
//     userAvatar:
//       "https://c.files.bbci.co.uk/9270/production/_126588473_boris_1221_getty.jpg",
//     comment:
//       "Highly recommend this app! It's been a great tool for learning new things in a fun way.",
//     userName: "Daniel",
//   },
// ]

const initialState = {
  reviews: [],
  page: 1,
  total: null,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllReviewsThunk.fulfilled, (state, action) => {
        state.reviews.push(...action.payload.feedbacks);
        state.page += 1;
        state.total = action.payload.totalCount;
      })
      .addCase(createReviewThunk.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(createReviewQuizThunk.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      })
      .addCase(createQuizReviewThunk.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
      });
  },
});

export const feedbackReducer = feedbackSlice.reducer;
