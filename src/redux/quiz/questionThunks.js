import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
} from "../../api/question";

export const addQuestionThunk = createAsyncThunk(
  "quiz/addQuestion",
  async (questionData, thunkAPI) => {
    try {
      const data = await addQuestion(questionData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getQuestionThunk = createAsyncThunk(
  "question/getQuestion",
  async (questionId, thunkAPI) => {
    try {
      const data = await getQuestion(questionId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateQuestionThunk = createAsyncThunk(
  "question/updateQuestion",
  async (questionData, thunkAPI) => {
    try {
      const data = await updateQuestion(questionData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteQuestionThunk = createAsyncThunk(
  "quiz/deleteQuestion",
  async (id, thunkAPI) => {
    console.log("idThunk: ", id);
    try {
      const data = await deleteQuestion(id);
      console.log("data: ", data);

      return id;
      /* better to come back here from server in data - id question */
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
