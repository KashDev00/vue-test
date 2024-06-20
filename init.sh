sudo apt-get install docker nginx
sudo service docker start
sudo service nginx start
sudo yes | cp default /etc/nginx/sites-enabled
sudo service nginx restart
