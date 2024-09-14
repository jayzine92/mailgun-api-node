# Mailgun mailer api in nodejs
#### Dependencies required
1. mailgun.js
2. express
3. nodemon
4. form-data

### Start a script
```npm run start:dev```

### Steps to follow
1. RUN ```npm ci```
2. RUN ```npm run start:dev```

## DOCKER
#### Created ```Dockerfile``` to create docker image

#### Steps to follow
1. docker build -t mailgun:latest .
2. docker run -d -p 3006:3006 mailgun:latest

```Note: Install DOCKER DESKTOP```
