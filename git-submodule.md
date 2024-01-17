# Git Submodule
Einbinden von anderen Repositories in ein Anderes.

### Integrieren des Moduls
- `git submodule add git@github.com/path/to-submodule.git name_of_submodule_folder`

- Änderungen in der `.gitmodules` und `.git` speichern:
- `git commit -m "added Submodule XXXX`
- `git push`

------
### Einrichten für andere beteiligte Entwickler
- Änderungen pullen - `git pull`
- Submodule initialisieren - `git submodule init`
- Inhalte der Submodule laden - `git submodule update`
- Inhalte der Submodule löschen - `git submodule deinit <submodule>`

#### Arbeiten mit Submodulen
- Derzeit wird es besser sein wenn ihr nur in euren Repositories und nicht innerhalb der Submodule arbeitet. Die Submodule müssen vom Haupt-Repository aus auf den letzten Push/Commit aktualisiert werden. Das bedeutet, dass die Submodule nicht umbedingt die neueste Version des Submodul-Repositories enthält.
- Wenn ihr in den Ordner eines Submoduls wechselt, ändert sich der Git-Kontext. Ihr seid dann im Repository des Git-Submoduls und nicht mehr in eurem.
Das kann:
- Gut sein, da man im Workflow auch über die große Struktur, immernoch schnell Zugang zu den anderne Repositories hat und Änderungen commit und pushen kann.
- Zu **Problemen** führen, wenn man sich im falschen Verzeichnis/Branch/Repo/Submodule befindet und dort dann Änderungen hinzufügt/bereitstellt/vornimmt.
