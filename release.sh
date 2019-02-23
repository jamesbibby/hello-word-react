aws s3 rm s3://bibs-hello-world-react --recursive
aws s3 cp --recursive ./build/ s3://bibs-hello-world-react/
