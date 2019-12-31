.PHONY=dev

dev:
	tmux \
		new-session "php artisan serve" \;\
		split-window -v "maildev --ip 127.0.0.1" \;\
		split-window -h "npm run watch" \;\
