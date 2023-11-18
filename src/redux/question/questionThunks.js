import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion,
} from "../../api/question";

export const addQuestionThunk = createAsyncThunk(
  "question/addQuestion",
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
  "question/deleteQuestion",
  async (questionId, thunkAPI) => {
    try {
      await deleteQuestion(questionId);
      return questionId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
