FROM alpine

# Step 2: Download and install dependency

RUN apk add --update redis
RUN apk add --update gcc

# Step 3: Tell the image what to do when it starts as container

CMD ["redis-server"]