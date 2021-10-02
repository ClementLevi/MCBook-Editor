import json

class LocalString(object):
    def __init__(self, langConf: str) -> None:
        """Receive the local language setting from 'langConf'(E.g. "zh-cn"),
            to render the translation of GUI elements.
            The translation will be stored in self.translation temporarily"""
        with open(r"localization\localization.json", "rt", encoding="utf-8") as lang:
            try:
                self.translation = json.load(lang)[langConf]
            except KeyError:
                self.translation = json.load(lang)["config"]["default"]

    def t(self, item: str):
        try:
            if self.translation[item]:
                return self.translation[item]
            else:
                raise KeyError
        except KeyError:
            return item


if __name__ == "__main__":
    LocalString("zh-cn")