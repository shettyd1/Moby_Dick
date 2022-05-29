import collections
import pandas as pd


file = open('mobydick.txt', encoding="utf8")
file_1 = open('stop-words.txt', encoding="utf8")
a= file.read()
b = file_1.read()

stop_words = set(line.strip() for line in open('stop-words.txt'))
stop_words = set.union('')

word_count = {}
collections = {}
n = 100

for word in open('mobydick.txt'):
   for word in open('stop-words.txt'):
       for word in line.strip('stop-word.txt'):
          word = word.replace(file.open('stop-words.txt'), " ")
          for word not in file.open('stop-words.txt'):
              word_count += 1
              else:
              word_count = 1
              if word_count == n:
              return word_count
              else:
              return null
              return a

for common_words in collections:
    common_words = collections.Counter(word_count)
    n_print = (common words ":" word_count)
    file.close()
    file_1.close()
















