#Skeleton for nodejs v0.12 with ES6 (babeljs) and all we need to well start any kind of project
# WARNING : DOCKERFILE CURRENTLY IN WORKING PROGRESS

- travis pre-filled file
- esdoc.json pre-filled file (work with : esdoc -c esdoc.json)
- testing with MOCHA + SINON + CHAI
- gulp watch to listen on any changes on src and reload tests
- istanbul coverage included
- bunyan for logs
- Actually building a dockerfile so making it in a container would be easy

In this skeleton, statsd is not use. Bunyan makes the job with Elasticsearch / Logstash / Kibana stack and Sitespeed.IO / Graphite / Grafana stack.

Feel free to clone, and to ask for more


- Install globally gulp, standard and esdoc@0.4.3 (not using ES6 for node < 4)
