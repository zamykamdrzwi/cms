<?php

$connect = mysqli_connect('localhost', 'phpmyadmin', '1234', 'cms');

if (mysqli_connect_errno()) {
  exit('Failed to connect to MySQL: ' .mysqli_connect_error());
}