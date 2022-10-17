task :serve do
  sh "bundle exec jekyll s --watch --incremental --future -V -P 4001"
end

# watch es para q si algo ha cambiado, recompile, --incremental creo q lo reconstruye todo
# -V (verbose) para que muerte toda la info al compilar y -P es para el puerto 4001

task :build do
  sh "bundle exec jekyll build --future -V"
end

task deploy: [ :build ] do
  sh "npx gh-pages -d _site"
end
