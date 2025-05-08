from django.db import models

class Noticia(models.Model):
    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    imagem = models.ImageField(upload_to='noticias_imagens/', blank=True, null=True)
    data_publicacao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
