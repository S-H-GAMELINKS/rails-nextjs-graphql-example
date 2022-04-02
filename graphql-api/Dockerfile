FROM ruby:3.1

RUN apt-get update && \
    apt-get install -y postgresql-client

WORKDIR /graphql-api

COPY . ./

RUN bundle install
