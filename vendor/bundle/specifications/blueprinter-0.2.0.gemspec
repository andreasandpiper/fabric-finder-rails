# -*- encoding: utf-8 -*-
# stub: blueprinter 0.2.0 ruby lib

Gem::Specification.new do |s|
  s.name = "blueprinter".freeze
  s.version = "0.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Adam Hess".freeze, "Derek Carter".freeze]
  s.date = "2018-01-22"
  s.description = "Blueprinter is a JSON Object Presenter for Ruby that takes business objects and breaks them down into simple hashes and serializes them to JSON. It can be used in Rails in place of other serializers (like JBuilder or ActiveModelSerializers). It is designed to be simple, direct, and performant.".freeze
  s.email = ["adamhess1991@gmail.com".freeze]
  s.homepage = "https://github.com/procore/blueprinter".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.2.2".freeze)
  s.rubygems_version = "2.6.12".freeze
  s.summary = "Simple Fast Declarative Serialization Library".freeze

  s.installed_by_version = "2.6.12" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<oj>.freeze, ["~> 3.0"])
      s.add_development_dependency(%q<pry>.freeze, [">= 0"])
      s.add_development_dependency(%q<rails>.freeze, ["~> 5.1.2"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.7"])
      s.add_development_dependency(%q<sqlite3>.freeze, [">= 0"])
      s.add_development_dependency(%q<yard>.freeze, ["~> 0.9.11"])
    else
      s.add_dependency(%q<oj>.freeze, ["~> 3.0"])
      s.add_dependency(%q<pry>.freeze, [">= 0"])
      s.add_dependency(%q<rails>.freeze, ["~> 5.1.2"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.7"])
      s.add_dependency(%q<sqlite3>.freeze, [">= 0"])
      s.add_dependency(%q<yard>.freeze, ["~> 0.9.11"])
    end
  else
    s.add_dependency(%q<oj>.freeze, ["~> 3.0"])
    s.add_dependency(%q<pry>.freeze, [">= 0"])
    s.add_dependency(%q<rails>.freeze, ["~> 5.1.2"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.7"])
    s.add_dependency(%q<sqlite3>.freeze, [">= 0"])
    s.add_dependency(%q<yard>.freeze, ["~> 0.9.11"])
  end
end
