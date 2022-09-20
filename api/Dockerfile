# FROM python:3.8-slim-buster
# WORKDIR /server
# COPY . .
# RUN pip3 install -r requirements.txt

# COPY . /usr/src/app
# ENV FLASK_APP=api.py
# CMD [ "python3", "api.py"]

FROM python:3.8-slim-buster

WORKDIR /app 

COPY . /app 

RUN pip install -r requirements.txt 
