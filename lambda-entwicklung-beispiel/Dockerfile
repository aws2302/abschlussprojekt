FROM public.ecr.aws/lambda/nodejs:20

# Copy function code and packages
COPY index.js package.json ${LAMBDA_TASK_ROOT}

# Install packages
WORKDIR ${LAMBDA_TASK_ROOT}
RUN npm install

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "index.handler" ]