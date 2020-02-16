git clone https://github.com/Himeyama/Aquamarine
dir=Aquamarine
cp -r $dir/_includes .
cp -r $dir/_layouts .
cp -r $dir/assets .
rm -rf $dir
echo _site/>>.gitignore
echo .jekyll-cache/>>.gitignore
