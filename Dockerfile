# 1 project building
FROM node:16 AS base

# 1.1 node build env
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max_old_space_size=2048
ENV NODE_ENV="production"

# 1.3 copy files
WORKDIR /var/project
COPY package.json /var/project
COPY package-lock.json /var/project
RUN npm i

COPY . /var/project/
RUN npm run build

# 2 serving
FROM nginx:stable-alpine as production

# 2.2 add env
ENV TZ=Europe/Moscow

WORKDIR /var/project
COPY --from=base /var/project/build /var/project/build
COPY --from=base /var/project/config/nginx.conf /etc/nginx/nginx.conf
COPY --from=base /var/project/config/run.sh .

EXPOSE 51268

ENTRYPOINT ["sh", "./run.sh"]
