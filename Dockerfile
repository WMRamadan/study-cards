FROM python:3.8.5-slim as py

FROM py as base
ENV PYTHONUNBUFFERED 1

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    build-essential python-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY api ./api/
COPY setup.py ./

FROM base as develop
COPY --from=base / /

RUN pip3 install --no-cache-dir -e .

EXPOSE 8000

ENTRYPOINT ["uvicorn"]
