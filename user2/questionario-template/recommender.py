#!flask/bin/python
# -*- coding: utf-8 -*-
from flask import Flask, request, jsonify
import os
import thread
import time
import threading

app = Flask('recommender')

@app.route("/recommender/<idSession>", methods=["POST","GET"])
def receive_data(idSession):
	if request.method == "POST":
		timestamp = request.form["timestamp"]
		idUser = request.form["idUser"]		
		if timestamp == "10":
			print "User: "+idUser +" Ficou 10 segundos parados, retorna dica"
			return "Isole a variável x", 200
		elif timestamp == "20":
			print "User: "+idUser +" Ficou 20 segundos parados retorna ao conteudo"
			return "Exercício difícil -> Conteudo", 200
		elif timestamp == "30":
			print "User: "+idUser +" Ficou 30 segundos parados retorna Exercicio Facil"
			return "Exercicio Fácil", 200
		elif timestamp == "0":
			print "User: "+idUser +" Nao conseguiu resolver o exercicio facil, Avisa o professor"			
			return "Saindo do exercicio...", 200

	elif request.method == "GET":
		timestamp = request.form["timestamp"]	
		print "tente por POST" + timestamp
	return "ok receiving", 201

if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
