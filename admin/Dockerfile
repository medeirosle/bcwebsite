FROM node:18.15.0 AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm run build

FROM nginx

COPY --from=build dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]