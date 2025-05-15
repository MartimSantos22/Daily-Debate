from django.db import models

class Noticia(models.Model):
    CATEGORIAS_CHOICES = [
        ('Mundo', 'Mundo'),
        ('Europa', 'Europa'),
        ('Desporto', 'Desporto'),
        ('Tecnologia', 'Tecnologia'),
        ('Business', 'Business'),
        ('Outras', 'Outras'),
    ]

    titulo = models.CharField(max_length=200)
    conteudo = models.TextField()
    imagem = models.ImageField(upload_to='noticias_imagens/', blank=True, null=True)
    data_publicacao = models.DateTimeField(auto_now_add=True)
    views = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    categoria = models.CharField(max_length=30, choices=CATEGORIAS_CHOICES, default='Outras')

    def __str__(self):
        return self.titulo
