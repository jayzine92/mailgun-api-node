# Mailgun app in nodejs
### API end point is ```localhost:30006/mail/send``` in local machine.
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
1. Run command ```docker build -t mailgun:latest .```
2. Run command ```docker run -d -p 3006:3006 mailgun:latest```
3. RUN command ```docker ps``` to check if your image is running.

```Note: Install DOCKER DESKTOP```
