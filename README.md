# SentimentAnalysis_Frontend
This Repository contains the implementation of the frontend WebApp used to access to the final product of the Sentimental Analysis project of "I Sentimentalysti" realized for the course of Software Engineering @ Politecnico di Bari. We started with a 50k reviews dataset from IMDB (found on Kaggle) and created a model which can be used for a binary classification o user reviews in two categories (positive or negative).<br>
After training and testing different ML models (python languange) and picking one of them (in the <a href="https://github.com/davexhardware/SentimentAnalysis_ModelTesting">Model_Testing repo</a>), exported in a pickle model, we built a Backend Server (with Python, <a href="https://github.com/davexhardware/SentimentAnalysis_Backend">BE repo</a>) which serves the requests from this WebApp.
In order to run this application, you need <b>Angular and Angular Material</b>.
