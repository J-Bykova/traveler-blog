#!/usr/bin/env bash

rm -rf ./out;
mkdir ./out;
lessc src/index.less out/bundle.css;
cp src/index.html out/index.html;

# Compressing images
mkdir ./out/img/
for source_file_path in $(find ./src/img -type f)
do
  out_file_name=$(basename -- "$source_file_path")
  out_file_path="./out/img/${out_file_name%.*}.webp"
  cwebp "$source_file_path" -o "$out_file_path"
done