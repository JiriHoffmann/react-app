# Clustered web app on GCP with a CI/CD pipeline

### 1. Clone the repository

### 2. Create a Kubernetes cluster
- Select desired region

### 3. Create a Cloud Build trigger
- Select trigger event
- Give Cloud Build access to the repository
- For configuration select: `Cloud Build configuration file (yaml or json)`
- Add/Skip Substitution variables - used as environment variables
- Add the same variables as `--build-arg` in `cloudbuild.yaml`
- `IAM & Admin` -> `IAM` -> add `Kubernetes Engine Developer` role to the cloudbuild service account

### 4. VPC network
- Create new static external IP address: `VPC network` -> `Extrenal IP address` -> reserve IP address
- Set IP name for `kubernetes.io/ingress.global-static-ip-name` in `deployment.yaml`

### 5. Cloud Domains & DNS
- `Networking services` -> `Cloud Domains` -> `Register domain`
- Pick domain name and create a new DNS zone
- `Networking services` -> `Cloud DNS` -> select zone -> `Add record set` -> add the static external IP

### 6. Update `deployment.yaml`
- Add correct project name for the container image on line 18
- Set desired autoscaling policy
- Update container names
- Comment out `networking.gke.io/managed-certificates` - we will let GKE create a load balancer and then assign a Google-managed certificate to it after the first build

### 7. Trigger first build
- Once finished, go to `Network services` -> `Load balancing` -> select created load balancer -> `Frontend configuration` -> `Certificate` -> `Create a Certificate` -> `Create Google-managed certificate`
- Uncomment `networking.gke.io/managed-certificates` in `deployment.yaml` and add the certificate name

## That's it!
Now you have a production-ready clusterized web app on GCP with a CI/CD pipeline to automatically deploy your changes to the cluster.